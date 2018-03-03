using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MaratonaBots.Dialogs
{
    [Serializable]
    public class RootDialog : IDialog<object>
    {
        public Task StartAsync(IDialogContext context)
        {
            context.Wait(MessageReceivedAsync);

            return Task.CompletedTask;
        }

        private async Task MessageReceivedAsync(IDialogContext context, IAwaitable<object> result)
        {
            var activity = await result as Activity;

            // calculate something for us to return
            int length = (activity.Text ?? string.Empty).Length;

            // return our reply to the user
            await context.PostAsync($"**Hello young padawan!**");

            var message = activity.CreateReply();

            if (activity.Text.Equals("herocard", StringComparison.InvariantCultureIgnoreCase))
            {
                message.Attachments.Add(CreateHeroCard());

                await context.PostAsync(message);
            }

            if (activity.Text.Equals("videocard", StringComparison.InvariantCultureIgnoreCase))
            {
                message.Attachments.Add(CreateVideoCard());

                await context.PostAsync(message);
            }

            if (activity.Text.Equals("audiocard", StringComparison.InvariantCultureIgnoreCase))
            {
                message.Attachments.Add(CreateAudioCard());

                await context.PostAsync(message);
            }

            if (activity.Text.Equals("animationcard", StringComparison.InvariantCultureIgnoreCase))
            {
                message.Attachments.Add(CreateAnimationCard());

                await context.PostAsync(message);
            }

            if (activity.Text.Equals("carousel", StringComparison.InvariantCultureIgnoreCase))
            {
                message.AttachmentLayout = AttachmentLayoutTypes.Carousel;

                message.Attachments.Add(CreateAnimationCard());
                message.Attachments.Add(CreateAudioCard());

                await context.PostAsync(message);
            }

            context.Wait(MessageReceivedAsync);
        }

        private Attachment CreateAnimationCard()
        {
            var animationCard = new AnimationCard();

            animationCard.Title = "Cat giphy";
            animationCard.Subtitle = "A cute cat giphy";
            animationCard.Autostart = true;
            animationCard.Autoloop = false;
            animationCard.Media = new List<MediaUrl>
            {
                new MediaUrl("https://media.giphy.com/media/2FayVoBQ0oxVel3aM/giphy.gif")
            };

            return animationCard.ToAttachment();
        }

        private Attachment CreateAudioCard()
        {
            var audioCard = new AudioCard();

            audioCard.Title = "Audio";
            audioCard.Subtitle = "Revealing audio";
            audioCard.Image = new ThumbnailUrl("http://planeta-terra.info/images/imagens/planeta-terra.jpg");
            audioCard.Autostart = true;
            audioCard.Autoloop = false;
            audioCard.Media = new List<MediaUrl>
            {
                new MediaUrl("https://www.myinstants.com/media/sounds/star-wars-luke-i-am-your-father.mp3")
            };

            return audioCard.ToAttachment();
        }

        private Attachment CreateHeroCard()
        {
            var heroCard = new HeroCard();

            heroCard.Title = "Planeta";
            heroCard.Subtitle = "Universo";
            heroCard.Images = new List<CardImage>
            {
                new CardImage("http://planeta-terra.info/images/imagens/planeta-terra.jpg", "Imagem do planeta", new CardAction(type: ActionTypes.OpenUrl, value: "https://adaptivecards.io/visualizer/"))
            };

            heroCard.Buttons = new List<CardAction>
            {
                new CardAction
                {
                    Type = ActionTypes.PostBack,
                    Text = "Botao",
                    DisplayText = "Display",
                    Title = "Title",
                    Value = "aqui vai um texto"
                }
            };

            return heroCard.ToAttachment();
        }

        private Attachment CreateVideoCard()
        {
            var videocard = new VideoCard();

            videocard.Title = "R2D2";
            videocard.Subtitle = "R2D2 always save the world";
            videocard.Autostart = true;
            videocard.Autoloop = false;
            videocard.Media = new List<MediaUrl>
            {
                new MediaUrl("https://www.youtube.com/watch?v=JLmOteqmDYc")
            };

            return videocard.ToAttachment();
        }
    }
}