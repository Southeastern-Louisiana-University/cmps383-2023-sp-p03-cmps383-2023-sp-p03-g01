using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.ScheduledRoutes;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Migrations;
using System.Globalization;
using System.Transactions;

namespace SP23.P03.Web.Controllers;
[Route("api/scheduledRoutes")]
[ApiController]
    public class ScheduledRoutesController : ControllerBase
    {
    private readonly DbSet<TrainScheduledRoutes> scheduledRoutes;
    private readonly DbSet<TrainRoute> trainRoutes;
    private readonly DataContext dataContext;

    public ScheduledRoutesController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        trainRoutes = dataContext.Set<TrainRoute>();
        scheduledRoutes = dataContext.Set<TrainScheduledRoutes>();
    }
    private static IQueryable<TrainScheduledRoutesDto> GetTrainScheduledRoutesDtos(IQueryable<TrainScheduledRoutes> scheduledRoutes)
    {
        return scheduledRoutes
            .Select(x => new TrainScheduledRoutesDto
            {
                Id = x.Id,
                Routes = x.Routes.Select(x => new TrainRouteDto
                {
                    Id = x.Id,
                    ArrivalTime = x.ArrivalTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                    DeperatureTime = x.DeperatureTime.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture),
                    ArrivalStation = x.Path.StartingTrainStation.City +", "+ x.Path.StartingTrainStation.State,
                    DeperatureStation = x.Path.EndingTrainStation.City + ", " + x.Path.EndingTrainStation.State,
                    PassengerCount = x.PassengerCount,
                }),
            });
    }
    [HttpGet]
    public IQueryable<TrainScheduledRoutesDto> GetAllTrainScheduledRoutes()
    {
        return GetTrainScheduledRoutesDtos(scheduledRoutes);
    }
    [HttpGet]
    [Route("{id}")]
    public ActionResult<TrainScheduledRoutesDto> GetSectionById(int id)
    {
        var result = GetTrainScheduledRoutesDtos(scheduledRoutes.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }
    [HttpPost]
    public ActionResult<TrainScheduledRouteCreateDto> CreateTrainScheduledRoutes(TrainScheduledRouteCreateDto dto)
    {
        if (dto.RoutesId == null)
        {
            return BadRequest();
        }

        var trainScheduledRoutes = new TrainScheduledRoutes{};
        var temptrainRoute = new TrainRoute();

        for (int y = 0; y < dto.RoutesId.Count(); y++)
        {
            temptrainRoute = trainRoutes.Where(x => x.Id == dto.RoutesId.ElementAt(y)).FirstOrDefault();
            if (temptrainRoute == null)
            {
                return NotFound();
            }

            trainScheduledRoutes.Routes.Add(temptrainRoute);
        } 
        scheduledRoutes.Add(trainScheduledRoutes);

        dataContext.SaveChanges();

        return CreatedAtAction(nameof(GetSectionById), new { id = trainScheduledRoutes.Id }, trainScheduledRoutes);
    }
    [HttpPut]
    [Route("{id}")]
    public ActionResult<TrainScheduledRouteCreateDto> UpdateTrainScheduledRoutes(int id, TrainScheduledRouteCreateDto dto)
    {
        if (dto.RoutesId == null)
        {
            return BadRequest();
        }

        var scheduledTrainRoutes = scheduledRoutes.FirstOrDefault(x => x.Id == id);
        scheduledTrainRoutes.Routes = new List<TrainRoute>();

        if (scheduledTrainRoutes == null)
        {
            return NotFound();
        }

        var temptrainRoute = new TrainRoute();
        for (int y = 0; y < dto.RoutesId.Count(); y++)
        {
            temptrainRoute = trainRoutes.Where(x => x.Id == dto.RoutesId.ElementAt(y)).FirstOrDefault();
            if (temptrainRoute == null)
            {
                return NotFound();
            }

            scheduledTrainRoutes.Routes.Add(temptrainRoute);
        }
        dataContext.SaveChanges();

        return Ok(scheduledTrainRoutes);
    }
    [HttpDelete]
    [Route("{id}")]
    public ActionResult DeleteTrainScheduledRoutes(int id)
    {
        var scheduledTrainRoutes = scheduledRoutes.FirstOrDefault(x => x.Id == id);
        if (scheduledTrainRoutes == null)
        {
            return NotFound();
        }


        scheduledRoutes.Remove(scheduledTrainRoutes);

        dataContext.SaveChanges();

        return Ok();
    }
}
