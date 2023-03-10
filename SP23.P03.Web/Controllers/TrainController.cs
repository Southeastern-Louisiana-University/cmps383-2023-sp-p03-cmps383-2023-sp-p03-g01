using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Controllers;

[Route("api/trains")]
[ApiController]
    public class TrainController : ControllerBase
    {
        private readonly DbSet<Train> trains;
        private readonly DataContext dataContext;

        public TrainController(DataContext dataContext)
        {
            this.dataContext = dataContext;
            trains = dataContext.Set<Train>();
        }
    [HttpGet]
    public IQueryable<TrainDto> GetAllTrains()
    {
        return GetTrainDtos(trains);
    }

    [HttpGet]
    [Route("{id}")]
    public ActionResult<TrainDto> GetStationById(int id)
    {
        var result = GetTrainDtos(trains.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }

    [HttpPost]
    public ActionResult<TrainCreateDto> CreateStation(TrainCreateDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var train = new Train
        {
            TrainRouteId = dto.TrainRouteId,
            Locomotive = dto.Locomotive,
        };
        trains.Add(train);

        dataContext.SaveChanges();

        dto.Id = train.Id;

        return CreatedAtAction(nameof(GetStationById), new { id = dto.Id }, dto);
    }

    private bool IsInvalid(TrainCreateDto dto)
    {
        return string.IsNullOrWhiteSpace(dto.Locomotive) ||
               dto.Locomotive.Length > 100;
    }
    private static IQueryable<TrainDto> GetTrainDtos(IQueryable<Train> trains)
    {
        return trains
            .Select(x => new TrainDto
            {
                Id = x.Id,
                Locomotive= x.Locomotive,
                TrainRouteId = x.TrainRouteId,
                Sections = x.Sections.Select(x => new SectionDto 
                { Id = x.Id,
                  Class = x.Class,
                  Capacity= x.Capacity,
                  Features= x.Features,
                  SeatList = x.SeatList.Select(x => new SeatDto
                    {
                        Quantity = x.Quantity,
                        type = x.type
                    })
                }),
            });
    }
    [HttpPut]
    [Route("{id}")]
    public ActionResult<TrainCreateDto> UpdateTrain(int id, TrainCreateDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var train = trains.FirstOrDefault(x => x.Id == id);
        if (train == null)
        {
            return NotFound();
        }


        train.Locomotive = dto.Locomotive;
        train.TrainRouteId = dto.TrainRouteId;

        dataContext.SaveChanges();

        dto.Id = train.Id;

        return Ok(dto);
    }

    [HttpDelete]
    [Route("{id}")]
    public ActionResult DeleteTrain(int id)
    {
        var train = trains.FirstOrDefault(x => x.Id == id);
        if (train == null)
        {
            return NotFound();
        }


        trains.Remove(train);

        dataContext.SaveChanges();

        return Ok();
    }
    /*    private bool InvalidStationId(int? StationId)
        {
            if (StationId == null)
            {
                return false;
            }

            if (!User.IsInRole(RoleNames.Admin))
            {
                // only admins can change manager ids anyway
                return false;
            }
            return !dataContext.Set<TrainStation>().Any(x => x.Id == StationId);
        }*/
}
