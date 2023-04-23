using Microsoft.AspNetCore.Mvc;
using Stripe;
using Stripe.Checkout;

namespace SP23.P03.Web.Controllers;

[ApiController]
[Route("api/payment")]
public class PaymentController : ControllerBase
{

    private readonly IConfiguration _config;

    public PaymentController(IConfiguration config)
    {
        _config = config;

        StripeConfiguration.ApiKey = _config["StripeBackendSecret"];
    }

    [HttpPost("create-checkout-session")]
    public ActionResult Create()
    {
        var domain = $"https://{HttpContext.Request.Host.Value}/";
        var options = new SessionCreateOptions
        {
            LineItems = new List<SessionLineItemOptions>
                {
                  new SessionLineItemOptions
                  {
                    Price = "price_1N0AIgFW1RxYQCHIz18O0vcL",
                    Quantity = 1,
                  },
                },
            Mode = "payment",
            SuccessUrl = domain + "ticketSuccess?session_id={CHECKOUT_SESSION_ID}",
            CancelUrl = domain + "ticketCanceled",
        };
        var service = new SessionService();
        Session session = service.Create(options);

        Response.Headers.Add("Location", session.Url);
        return new StatusCodeResult(303);
    }
}

