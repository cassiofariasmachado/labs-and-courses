using Newtonsoft.Json;

namespace MaratonaBots.Models
{
    public class QuotationModel
    {
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "acronym")]
        public string Acronym { get; set; }

        [JsonProperty(PropertyName = "value")]
        public float Value { get; set; }
    }
}