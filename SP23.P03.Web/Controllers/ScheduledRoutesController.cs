﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.ScheduledRoutes;
using SP23.P03.Web.Features.Trains;
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
                    ArrivalTime = x.ArrivalTime,
                    DeperatureTime = x.DeperatureTime,
                    PathId = x.PathId,
                    TrainId = x.Train.Id,
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
    public ActionResult<TrainScheduledRouteCreateDto> CreateSection(TrainScheduledRouteCreateDto dto)
    {
        if (dto.RoutesId == null)
        {
            return BadRequest();
        }

        var trainScheduledRoutes = new TrainScheduledRoutes { 
        };
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
}
