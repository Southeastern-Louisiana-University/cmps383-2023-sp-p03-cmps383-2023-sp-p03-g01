using SP23.P03.Web.Features.Route;
using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.TrainTicket
{
    public class TrainScheduledRouteTicketDto
    {
        [Required]
        public int Id { get; set; }
        public int? RouteId { get; set; }
        [Required]
        public string? Code { get; set; }
        [Required]
        public string? SeatType { get; set; }
        [Required]
        public double cost { get; set; }
    }
}
