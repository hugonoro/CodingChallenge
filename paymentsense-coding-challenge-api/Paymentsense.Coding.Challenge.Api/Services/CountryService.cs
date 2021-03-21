using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Paymentsense.Coding.Challenge.Api.Models;

namespace Paymentsense.Coding.Challenge.Api.Services
{
    public class CountryService : ICountryService
    {
        private readonly IHttpClientFactory _clientFactory;
        private readonly IConfiguration _configuration;

        public CountryService(IHttpClientFactory clientFactory, IConfiguration configuration)
        {
            _clientFactory = clientFactory;
            _configuration = configuration;
        }

        public async Task<Country[]> GetAll()
        {
            var countriesApi = _configuration.GetValue<string>("CountriesAPI");
            var client = _clientFactory.CreateClient();

            var response = await client.GetAsync($"{countriesApi}/all");

            if (response.IsSuccessStatusCode)
            {
                var countryList = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<Country[]>(countryList);
            }

            throw new Exception("An error occurred while connecting to the countries API endpoint.");
        }

        public async Task<Country[]> SearchByName(string name)
        {
            var countriesApi = _configuration.GetValue<string>("CountriesAPI");
            var client = _clientFactory.CreateClient();

            var response = await client.GetAsync($"{countriesApi}/name/{name}");

            if (response.IsSuccessStatusCode)
            {
                var countryList = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<Country[]>(countryList);
            }

            throw new Exception("An error occurred while connecting to the countries API endpoint.");
        }
    }
}
