namespace City.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        public CityController() { }

        [HttpGet]
        public async Task<IEnumerable<string>> GetStrings()
        {
            // Simulate async work (if needed)
            await Task.Delay(1); // Optional

            return new string[] { "Atlanta", "New York" };
        }
    }
}
