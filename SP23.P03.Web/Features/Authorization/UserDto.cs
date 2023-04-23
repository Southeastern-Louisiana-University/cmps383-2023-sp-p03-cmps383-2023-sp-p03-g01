using SP23.P03.Web.Features.TrainTicket;
using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.Authorization;

public class UserDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string UserName { get; set; } = string.Empty;
    [Required]
    public string[] Roles { get; set; } = Array.Empty<string>();
    public IEnumerable<TrainRouteTicketDto>? Tickets { get; set; }
}