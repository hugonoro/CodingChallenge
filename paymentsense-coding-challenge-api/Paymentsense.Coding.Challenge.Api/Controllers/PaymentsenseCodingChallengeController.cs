using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Paymentsense.Coding.Challenge.Api.Services;

namespace Paymentsense.Coding.Challenge.Api.Controllers
{
    [ApiController]
    [Route("/countries")]
    public class PaymentsenseCodingChallengeController : ControllerBase
    {
        private ICountryService _countryService;

        public PaymentsenseCodingChallengeController(ICountryService countryService)
        {
            _countryService = countryService;
        }

        [HttpGet]
        public ActionResult<string> Get()
        {
            return Ok("Paymentsense Coding Challenge!");
        }

        [HttpGet("all")]
        public async Task<ActionResult> GetAllCountries()
        {
            var countryList = await _countryService.GetAll();
            return Ok(countryList);
        }
    }
}
