﻿using Microsoft.AspNetCore.Mvc;
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
        private readonly DbSet<TrainScheduledRoutes> scheduledRoutes;
        private readonly DbSet<Seat> seats;
        private readonly DataContext dataContext;

        public TicketController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            tickets = dataContext.Set<TrainRouteTicket>();
            scheduledRoutes = dataContext.Set<TrainScheduledRoutes>();
            seats = dataContext.Set<Seat>();
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
                            ArrivalTime = x.ArrivalTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                            DeperatureTime = x.DeperatureTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                            PathId = x.PathId,
                            TrainId = x.Train.Id,
                        }),
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

            var scheduledTrainRoute = scheduledRoutes.Where(x => x.Id == dto.ScheduledTrainRouteId).FirstOrDefault();
            
            if (seat == null)
            {
                return BadRequest();
            }
            if (scheduledTrainRoute == null)
            {
                return BadRequest();
            }

            var ticket = new TrainRouteTicket
            {
                cost = dto.cost,
                SeatType = seat.type,
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
                        ArrivalTime = x.ArrivalTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                        DeperatureTime = x.DeperatureTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                        PathId = x.PathId,
                        TrainId = x.Train.Id,
                    }),
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

            var scheduledTrainRoute = scheduledRoutes.Where(x => x.Id == dto.ScheduledTrainRouteId).FirstOrDefault();

            if (seat == null)
            {
                return BadRequest();
            }
            if (scheduledTrainRoute == null)
            {
                return BadRequest();
            }

            var ticket = tickets.FirstOrDefault(x => x.Id == id);

            if (ticket == null)
            {
                return NotFound();
            }

            ticket.ScheduledTrainRoute = scheduledTrainRoute;
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
