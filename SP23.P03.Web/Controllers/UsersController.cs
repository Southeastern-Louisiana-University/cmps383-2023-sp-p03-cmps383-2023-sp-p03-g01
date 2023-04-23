using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.TrainTicket;
using System.Globalization;
using System.Transactions;

namespace SP23.P03.Web.Controllers;

[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly UserManager<User> userManager;

    public UsersController(UserManager<User> userManager)
    {
        this.userManager = userManager;
    }

    [HttpPost]
    public async Task<ActionResult<UserDto>> Create(CreateUserDto dto)
    {
        using var transaction = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled);

        var newUser = new User
        {
            UserName = dto.UserName,
        };
        var createResult = await userManager.CreateAsync(newUser, dto.Password);
        if (!createResult.Succeeded)
        {
            return BadRequest();
        }

        try
        {
            var roleResult = await userManager.AddToRolesAsync(newUser, dto.Roles);
            if (!roleResult.Succeeded)
            {
                return BadRequest();
            }
        }
        catch (InvalidOperationException e) when (e.Message.StartsWith("Role") && e.Message.EndsWith("does not exist."))
        {
            return BadRequest();
        }

        transaction.Complete();

        return Ok(new UserDto
        {
            Id = newUser.Id,
            Roles = dto.Roles,
            UserName = newUser.UserName,
            Tickets = newUser.Tickets.Select(x => new TrainRouteTicketDto
            {
                Id = x.Id,
                TrainRoute = new TrainRouteDto
                {
                    Id = x.TrainRoute.Id,
                    ArrivalTime = x.TrainRoute.ArrivalTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                    DepartureTime = x.TrainRoute.DeperatureTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                    ArrivalStation = x.TrainRoute.Path.EndingTrainStation.City + ", " + x.TrainRoute.Path.EndingTrainStation.State,
                    DepartureStation = x.TrainRoute.Path.StartingTrainStation.City + ", " + x.TrainRoute.Path.StartingTrainStation.State,
                    PassengerCount = x.TrainRoute.PassengerCount,
                },
                SeatType = x.SeatType,
                cost = x.cost,
                PassagerId = (int)x.PassagerId,
                Code = x.Code,

            })
        });
    }
}
