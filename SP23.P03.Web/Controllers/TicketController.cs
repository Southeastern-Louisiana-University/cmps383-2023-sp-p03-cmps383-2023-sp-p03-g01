using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.ScheduledRoutes;
using SP23.P03.Web.Features.TrainTicket;

namespace SP23.P03.Web.Controllers
{

    [Route("api/tickets")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly DbSet<TrainRouteTicket> tickets;
        private readonly DataContext dataContext;

        public TicketController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            tickets = dataContext.Set<TrainRouteTicket>();
        }
        private static IQueryable<TrainRouteTicketDto> GetTicketDtos(IQueryable<TrainRouteTicket> tickets)
        {
            return tickets
                .Select(x => new TrainRouteTicketDto
                {
                    Id = x.Id,
                    ScheduledTrainRoute = new TrainScheduledRoutesDto
                    {
                        Id = x.ScheduledTrainRoute.Id,
                        Routes = x.ScheduledTrainRoute.Routes.Select(x => new TrainRouteDto
                        {
                            Id = x.Id,
                            ArrivalTime = x.ArrivalTime,
                            DeperatureTime = x.DeperatureTime,
                            PathId = x.PathId,
                            TrainId = x.Train.Id,
                        }),
                    },
                    SeatId = x.Seat.Id,
                    cost = x.cost,
                    PassagerId = x.PassagerId,

                });
        }
        [HttpGet]
        public IQueryable<TrainRouteTicketDto> GetAllTickets()
        {
            return GetTicketDtos(tickets);
        }
    }
}
