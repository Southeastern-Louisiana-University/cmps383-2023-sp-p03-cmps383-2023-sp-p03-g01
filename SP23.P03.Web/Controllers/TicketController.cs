using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.ScheduledRoutes;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainTicket;
using Stripe.Terminal;

namespace SP23.P03.Web.Controllers
{

    [Route("api/tickets")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly DbSet<TrainRouteTicket> tickets;
        private readonly DbSet<TrainScheduledRoutes> scheduledRoutes;
        private readonly DbSet<Seat> seats;
        private readonly DbSet<User> users;
        private readonly DataContext dataContext;

        public TicketController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            tickets = dataContext.Set<TrainRouteTicket>();
            scheduledRoutes = dataContext.Set<TrainScheduledRoutes>();
            seats = dataContext.Set<Seat>();
            users = dataContext.Set<User>();
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
                    PassagerId = (int)x.PassagerId,

                });
        }
        [HttpGet]
        public IQueryable<TrainRouteTicketDto> GetAllTickets()
        {
            return GetTicketDtos(tickets);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<TrainScheduledRoutesDto> GetSectionById(int id)
        {
            var result = GetTicketDtos(tickets.Where(x => x.Id == id)).FirstOrDefault();
            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }
        [HttpPost]
        public ActionResult<TrainRouteTicketDto> CreateTickets(TrainRouteTicketCreateDto dto)
        {
            var seat = seats.Where(x => x.Id == dto.SeatId).FirstOrDefault();
            var scheduledTrainRoute = scheduledRoutes.Where(x => x.Id == dto.ScheduledTrainRouteId).FirstOrDefault();
            var ticket = new TrainRouteTicket
            {
                cost = dto.cost,
                Seat = seat,
                ScheduledTrainRoute = scheduledTrainRoute,
                Passager = null,
                PassagerId = null,
            };
            tickets.Add(ticket);

            dataContext.SaveChanges();

            var returnticket = new TrainRouteTicketDto
            {
                cost = ticket.cost,
                Id = ticket.Id,
                PassagerId = ticket.PassagerId,
                ScheduledTrainRoute = new TrainScheduledRoutesDto
                {
                    Id = ticket.ScheduledTrainRoute.Id,
                    Routes = ticket.ScheduledTrainRoute.Routes.Select(x => new TrainRouteDto
                    {
                        Id = x.Id,
                        ArrivalTime = x.ArrivalTime,
                        DeperatureTime = x.DeperatureTime,
                        PathId = x.PathId,
                        TrainId = x.Train.Id,
                    }),
                },
                SeatId = ticket.Seat.Id,
            };
            return CreatedAtAction(nameof(GetSectionById), new { id = returnticket.Id }, returnticket);
        }
    }
}
