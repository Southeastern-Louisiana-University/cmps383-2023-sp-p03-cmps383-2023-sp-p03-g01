using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.ScheduledRoutes;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainTicket;
using System.Globalization;

namespace SP23.P03.Web.Controllers
{

    [Route("api/tickets")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly DbSet<TrainRouteTicket> tickets;
        private readonly DbSet<TrainRoute> Routes;
        private readonly DbSet<Seat> seats;
        private readonly DataContext dataContext;

        public TicketController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            tickets = dataContext.Set<TrainRouteTicket>();
            Routes = dataContext.Set<TrainRoute>();
            seats = dataContext.Set<Seat>();
        }
        private static IQueryable<TrainRouteTicketDto> GetTicketDtos(IQueryable<TrainRouteTicket> tickets)
        {
            return tickets
                .Select(x => new TrainRouteTicketDto
                {
                    Id = x.Id,
                    TrainRoute =  new TrainRouteDto
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

            var TrainRoute = Routes.Where(x => x.Id == dto.TrainRouteId).FirstOrDefault();
            
            if (seat == null)
            {
                return BadRequest();
            }
            if (TrainRoute == null)
            {
                return BadRequest();
            }

            var ticket = new TrainRouteTicket
            {
                cost = dto.cost,
                SeatType = seat.type,
                TrainRoute = TrainRoute,
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
                TrainRoute = new TrainRouteDto
                {
                    Id = ticket.TrainRoute.Id,
                    ArrivalTime = ticket.TrainRoute.ArrivalTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                    DepartureTime = ticket.TrainRoute.DeperatureTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                    ArrivalStation = ticket.TrainRoute.Path.EndingTrainStation.City + ", " + ticket.TrainRoute.Path.EndingTrainStation.State,
                    DepartureStation = ticket.TrainRoute.Path.StartingTrainStation.City + ", " + ticket.TrainRoute.Path.StartingTrainStation.State,
                    PassengerCount = ticket.TrainRoute.PassengerCount,

                },
                SeatType = ticket.SeatType,
            };
            return CreatedAtAction(nameof(GetSectionById), new { id = returnticket.Id }, returnticket);
        }
        [HttpPut]
        [Route("{id}")]
        public ActionResult<TrainRouteTicketDto> UpdateTickets(int id, TrainRouteTicketCreateDto dto)
        {
            var seat = seats.Where(x => x.Id == dto.SeatId).FirstOrDefault();

            var TrainRoute = Routes.Where(x => x.Id == dto.TrainRouteId).FirstOrDefault();

            if (seat == null)
            {
                return BadRequest();
            }
            if (TrainRoute == null)
            {
                return BadRequest();
            }

            var ticket = tickets.FirstOrDefault(x => x.Id == id);

            if (ticket == null)
            {
                return NotFound();
            }

            ticket.TrainRoute = TrainRoute;
            ticket.SeatType = seat.type;
            ticket.cost = dto.cost;

            dataContext.SaveChanges();

            return Ok(ticket);
        }
        [HttpDelete]
        [Route("{id}")]
        public ActionResult DeleteTickets(int id)
        {
            var ticket = tickets.FirstOrDefault(x => x.Id == id);

            if (ticket == null)
            {
                return NotFound();
            }


            tickets.Remove(ticket);

            dataContext.SaveChanges();

            return Ok();
        }
        [HttpPut]
        [Route("{id}/{userId}")]
        public ActionResult<TrainRouteTicketDto> UpdateAssignTicket(int id, int userId)
        {

            var ticket = tickets.FirstOrDefault(x => x.Id == id);

            if (ticket == null)
            {
                return NotFound();
            }

            ticket.PassagerId = userId;

            dataContext.SaveChanges();

            return Ok(ticket);
        }
    }
}
