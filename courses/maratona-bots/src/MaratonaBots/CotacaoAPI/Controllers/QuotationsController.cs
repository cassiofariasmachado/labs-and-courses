using CotacaoAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CotacaoAPI.Controllers
{
    [Route("api/[controller]")]
    public class QuotationsController : Controller
    {
        private readonly List<QuotationModel> _quotations = new List<QuotationModel>
        {
            new QuotationModel
            {
                Name = "Dolar",
                Acronym = "USD",
                Value = 3.9189f
            },
            new QuotationModel
            {
                Name = "Euro",
                Acronym = "EUR",
                Value = 8.9113f
            },
            new QuotationModel
            {
                Name = "BitCoin",
                Acronym = "BTC",
                Value = 390000.1289f
            }
        };

        // GET api/values
        [HttpGet("{names}")]
        public IEnumerable<QuotationModel> Get(string names)
        {
            if (!string.IsNullOrWhiteSpace(names))
            {
                var toLowerNames = names.Split(',').Select(a => a.ToLowerInvariant().Trim());
                return _quotations.Where(q => toLowerNames.Contains(q.Name.ToLowerInvariant()));
            }

            return _quotations;
        }
    }
}
