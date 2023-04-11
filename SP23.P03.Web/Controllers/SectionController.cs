using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Controllers;

[Route("api/sections")]
[ApiController]
public class SectionController : ControllerBase
{
    private readonly DbSet<Section> sections;
    private readonly DataContext dataContext;

    public SectionController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        sections = dataContext.Set<Section>();
    }
    [HttpGet]
    public IQueryable<SectionDto> GetAllSections()
    {
        return GetSectionDtos(sections);
    }
    [HttpGet]
    [Route("{id}")]
    public ActionResult<SectionDto> GetSectionById(int id)
    {
        var result = GetSectionDtos(sections.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }
    private static IQueryable<SectionDto> GetSectionDtos(IQueryable<Section> sections)
    {
        return sections
            .Select(x => new SectionDto
            {
                Id = x.Id,
                Capacity = x.Capacity,
                Class = x.Class,
                Features = x.Features,
                SeatList = x.SeatList.Select(x => new SeatDto
                {
                    Quantity = x.Quantity,
                    type = x.type
                }),
            });
    }
    [HttpPost]
    public ActionResult<SectionCreateDto> CreateSection(SectionCreateDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var section = new Features.Trains.Section
        {
            Capacity = dto.Capacity,
            Class = dto.Class,
            Features = dto.Features,
        };
        sections.Add(section);

        dataContext.SaveChanges();

        dto.Id = section.Id;

        return CreatedAtAction(nameof(GetSectionById), new { id = dto.Id }, dto);
    }

    [HttpPut]
    [Route("{id}")]
    public ActionResult<SectionDto> UpdateSection(int id, SectionCreateDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var section = sections.FirstOrDefault(x => x.Id == id);
        if (section == null)
        {
            return NotFound();
        }

        section.Capacity = dto.Capacity;
        section.Class = dto.Class;
        section.Features = dto.Features;
        dataContext.SaveChanges();

        dto.Id = section.Id;

        return Ok(dto);
    }
    [HttpDelete]
    [Route("{id}")]
    public ActionResult DeleteSection(int id)
    {
        var section = sections.FirstOrDefault(x => x.Id == id);
        if (section == null)
        {
            return NotFound();
        }


        sections.Remove(section);

        dataContext.SaveChanges();

        return Ok();
    }


    private bool IsInvalid(SectionCreateDto dto)
    {
        return string.IsNullOrWhiteSpace(dto.Class);
    }
}
