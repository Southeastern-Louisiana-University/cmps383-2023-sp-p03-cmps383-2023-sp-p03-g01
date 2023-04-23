using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.ScheduledRoutes;
using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.TrainTicket
{
    public class TrainRouteTicketCreateDto
    {
        [Required]
        public int? TrainRouteId { get; set; }
        [Required]
        public int? SeatId { get; set; }
        [Required]
        public double cost { get; set; }
    }
}
