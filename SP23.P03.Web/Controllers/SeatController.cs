using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Controllers;

[Route("api/seats")]
[ApiController]
public class SeatController : ControllerBase
{
    private readonly DbSet<Seat> seats;
    private readonly DataContext dataContext;

    public SeatController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        seats = dataContext.Set<Seat>();
    }
    [HttpGet]
    public IQueryable<SeatDto> GetAllSeats()
    {
        return GetSeatDtos(seats);
    }
    private static IQueryable<SeatDto> GetSeatDtos(IQueryable<Seat> seats)
    {
        return seats
            .Select(x => new SeatDto
            {
                Id = x.Id,
                Quantity = x.Quantity,
                type = x.type,
            });
    }
    [HttpGet]
    [Route("{id}")]
    public ActionResult<SeatDto> GetSeatById(int id)
    {
        var result = GetSeatDtos(seats.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }
    [HttpPost]
    public ActionResult<SeatDto> CreateSection(SeatDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var seat = new Seat
        {
            type = dto.type,
            Quantity = dto.Quantity,
        };
        seats.Add(seat);

        dataContext.SaveChanges();

        dto.Id = seat.Id;

        return CreatedAtAction(nameof(GetSeatById), new { id = dto.Id }, dto);
    }
    private bool IsInvalid(SeatDto dto)
    {
        return string.IsNullOrWhiteSpace(dto.type);
    }
}
