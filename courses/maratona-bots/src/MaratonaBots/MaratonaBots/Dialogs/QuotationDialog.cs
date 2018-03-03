using MaratonaBots.Models;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Luis;
using Microsoft.Bot.Builder.Luis.Models;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace MaratonaBots.Dialogs
{
    [Serializable]
    [LuisModel("f746bcfa-8328-425e-8d43-1c99300f14b3", "b7513458e3d04702bb7cc05ea8817566")]
    public class QuotationDialog : LuisDialog<object>
    {
        [LuisIntent("None")]
        public async Task None(IDialogContext context, LuisResult result)
        {
            await context.PostAsync("Desculpe, mas não entendi a sua frase...");
        }

        [LuisIntent("Sobre")]
        public async Task About(IDialogContext context, LuisResult result)
        {
            await context.PostAsync("Eu sou um bot e estou sempre aprendendo");
        }

        [LuisIntent("Cumprimento")]
        public async Task Greeting(IDialogContext context, LuisResult result)
        {
            await context.PostAsync("Olá, sou um bot que faz a cotação de moedas!");
        }

        [LuisIntent("Cotacao")]
        public async Task GetQuotation(IDialogContext context, LuisResult result)
        {
            var currencies = result.Entities?.Select(e => e.Entity);

            string endpoint = $"http://cotacaoapi20180204051409.azurewebsites.net/api/quotations/{string.Join(",", currencies)}";

            await context.PostAsync($"Aguarde um momento enquanto eu obtenho as cotações...");

            using (var client = new HttpClient())
            {
                var response = await client.GetAsync(endpoint);

                if (!response.IsSuccessStatusCode)
                {
                    await context.PostAsync("Occorreu um erro, por favor tente mais tarde...");
                    return;
                }
                else
                {
                    var json = await response.Content.ReadAsStringAsync();
                    var quotations = JsonConvert.DeserializeObject<QuotationModel[]>(json);

                    var quotationsText = quotations?.Select(q => $"{q.Name}: {q.Value}");

                    await context.PostAsync($"{string.Join("<br>", quotationsText)}");
                }
            }
        }
    }
}