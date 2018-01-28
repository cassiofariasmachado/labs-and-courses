using Microsoft.Bot.Builder.CognitiveServices.QnAMaker;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace PizzariaHelloWorld.Dialogs
{
    [Serializable]
    public class QnADialog : QnAMakerDialog
    {
        private static string _qnASubscriptionKey = ConfigurationManager.AppSettings["QnASubscriptionKey"];
        private static string _qnAKnowleadgeBaseId = ConfigurationManager.AppSettings["QnAKnowledgebaseId"];

        public QnADialog() : base(new QnAMakerService(new QnAMakerAttribute(_qnASubscriptionKey, _qnAKnowleadgeBaseId, "Não encontrei sua resposta", 0.5)))
        {
        }

        protected override async Task RespondFromQnAMakerResultAsync(IDialogContext context, IMessageActivity message, QnAMakerResults result)
        {
            var firstAnswer = result.Answers.First().Answer;

            var response = ((Activity)context.Activity).CreateReply();

            var splitedAnswer = firstAnswer.Split(';').Select(a => a.Trim()).ToList();

            if (splitedAnswer.Count() > 1)
            {
                var title = splitedAnswer[0];
                var description = splitedAnswer[1];
                var url = splitedAnswer[2];
                var imageUrl = splitedAnswer[3];

                var card = new HeroCard(title, description);

                card.Buttons = new List<CardAction>
                {
                    new CardAction(ActionTypes.OpenUrl, "Compre agora", value: url)
                };

                card.Images = new List<CardImage>
                {
                    new CardImage(imageUrl)
                };

                response.Attachments.Add(card.ToAttachment());

                await context.PostAsync(response);
                return;
            }

            await context.PostAsync(firstAnswer);
        }
    }
}