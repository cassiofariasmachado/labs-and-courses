using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.FormFlow;
using System;

namespace MaratonaBots.Forms
{
    [Serializable]
    public class Order
    {
        public Salgadinho Salagadinho { get; set; }

        public Bebida Bebida { get; set; }

        public TipoEntrega TipoEntrega { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Address { get; set; }

        public static IForm<Order> BuildForm()
        {
            var form = new FormBuilder<Order>();

            form.Configuration.DefaultPrompt.ChoiceStyle = ChoiceStyleOptions.Buttons;
            form.Configuration.Yes = new string[] { "yes", "sim", "s", "y", "ok" };
            form.Configuration.Yes = new string[] { "no", "não", "n", "not" };
            form.Message("Olá, seja bem vindo. Será um prazer atende-lo.");
            form.OnCompletion(async (context, order) =>
            {
                // Salvar na base
                // Gerar pedido
                // Integrar com serviço xpto

                await context.PostAsync("Seu pedido número 12345 foi gerado.");
            });

            return form.Build();
        }
    }

    [Describe("Salgados")]
    public enum Salgadinho
    {
        None,

        [Terms("Esfirra", "esfira", "isfirra", "e")]
        [Describe("Esfirra")]
        Esfirra,

        [Terms("Quibe", "quibe", "kibe", "k")]
        [Describe("Quibe")]
        Quibe,

        [Terms("Coxinha", "coxa", "c")]
        [Describe("Coxinha")]
        Coxinha
    }

    [Describe("Bebida")]
    public enum Bebida
    {
        None,

        [Terms("Água", "agua", "h20", "a")]
        [Describe("Água")]
        Agua,

        [Terms("Refri", "refrigerante", "r")]
        [Describe("Refrigerante")]
        Refrigerante,

        [Terms("Suco", "s")]
        [Describe("Suco")]
        Suco
    }

    [Describe("Tipo de entrega")]
    public enum TipoEntrega
    {
        None,

        [Terms("Retirar no local", "eu pego", "eu retiro", "r")]
        [Describe("Retirar no local")]
        NoLocal,

        [Terms("Motoboy", "motoca", "entrega", "em casa", "m")]
        [Describe("Motoboy")]
        Motoboy
    }
}
