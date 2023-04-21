using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.ScheduledRoutes;
using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.TrainTicket;
using System.Globalization;

namespace SP23.P03.Web.Data;

public static class SeedHelper
{
    public static async Task MigrateAndSeed(IServiceProvider serviceProvider)
    {
        var dataContext = serviceProvider.GetRequiredService<DataContext>();

        await dataContext.Database.MigrateAsync();

        await AddRoles(serviceProvider);
        await AddUsers(serviceProvider);

        await AddTrainStation(dataContext);

        await AddSeat(dataContext);
        await AddSection(dataContext);
        await AddTrain(dataContext);
        await AddTrainPath(dataContext);
        await AddTrainRoute(dataContext);
        await AddTrainScheduledRoute(dataContext);
        await AddTickets(dataContext);

    }

    private static async Task AddUsers(IServiceProvider serviceProvider)
    {
        const string defaultPassword = "Password123!";
        var userManager = serviceProvider.GetRequiredService<UserManager<User>>();

        if (userManager.Users.Any())
        {
            return;
        }

        var adminUser = new User
        {
            UserName = "galkadi"
        };
        await userManager.CreateAsync(adminUser, defaultPassword);
        await userManager.AddToRoleAsync(adminUser, RoleNames.Admin);

        var bob = new User
        {
            UserName = "bob"
        };
        await userManager.CreateAsync(bob, defaultPassword);
        await userManager.AddToRoleAsync(bob, RoleNames.User);

        var sue = new User
        {
            UserName = "sue"
        };
        await userManager.CreateAsync(sue, defaultPassword);
        await userManager.AddToRoleAsync(sue, RoleNames.User);
    }

    private static async Task AddRoles(IServiceProvider serviceProvider)
    {
        var roleManager = serviceProvider.GetRequiredService<RoleManager<Role>>();
        if (roleManager.Roles.Any())
        {
            return;
        }
        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.Admin
        });

        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.User
        });
    }

    private static async Task AddTrainStation(DataContext dataContext)
    {
        var trainStations = dataContext.Set<TrainStation>();

        if (await trainStations.AnyAsync())
        {
            return;
        }

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Hammond",
                Address = "404 N.W. Railroad Avenue",
                Hours = "9:00 AM - 4:45 PM",
                City = "Hammond",
                State = "LA",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "New Orlean",
                Address = "1001 Loyola Avenue",
                Hours = "5:00 AM - 10:00 PM",
                City = "New Orlean",
                State = "LA",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Slidell",
                Address = "1827 Front St",
                Hours = "9:00 AM - 10:42 AM\r\n6:00 PM - 7:52 PM",
                City = "Slidell",
                State = "LA",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Picayune",
                Address = "200 South Highway 11",
                Hours = "unknown",
                City = "Picayune",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Hattiesburg",
                Address = "308 Newman Street",
                Hours = "10:00 AM - 1:00 PM\r\n4:00 PM - 7:00 PM",
                City = "Hattiesburg",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Laurel",
                Address = "230 North Maple Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Hattiesburg",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Meridian",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Hattiesburg",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Baton Rouge",
                Address = "1900 Bacl Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Baton Rouge",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "McComb",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "McComb",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Brookhaven",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Brookhaven",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Hazelhurst",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Jackson",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Jackson",
                State = "MS",
            }); 
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Yazoo City",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Yazoo City",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Schriever",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Schriever",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "New Iberia",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "New Iberia",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Lafayette",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Lafayette",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Lake Charles",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Lake Charles",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Shreveport",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Shreveport",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Texarkana",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Texarkana",
                State = "AR",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Marshall",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Marshall",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Longview",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Longview",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Nacogdoches",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Nacogdoches",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Beaumont",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Beaumont",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Galveston",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Galveston",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Houston",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Houston",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Tyler",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Mineola",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Prairie View",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Bryan",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Mesquite",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Dallas",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Waco",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Fort Worth",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Cleburne",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "McGregor",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Temple",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Taylor",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Austin",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "San Marcos",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "San Antonio",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Killeen",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Fort Hood",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Biloxi",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Mobile",
                State = "AL",
            });


        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainPath(DataContext dataContext)
    {
        var trainRoutes = dataContext.Set<TrainPath>();
        var trainStations = dataContext.Set<TrainStation>();
        var trains = dataContext.Set<Train>();

        var station1 = trainStations.First();
        var station2 = new TrainStation();
        var station3 = new TrainStation();
        var station4 = new TrainStation();
        var station5 = new TrainStation();
        var station6 = new TrainStation();

        if (trainStations.Find(2) != null)
        {
            station2 = trainStations.Find(2);
        }
        if (trainStations.Find(3) != null)
        {
            station3 = trainStations.Find(3);
        }
        if (trainStations.Find(4) != null)
        {
            station4 = trainStations.Find(4);
        }
        if (trainStations.Find(5) != null)
        {
            station5 = trainStations.Find(5);
        }
        if (trainStations.Find(6) != null)
        {
            station6 = trainStations.Find(6);
        }

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station1,
                StartingTrainStationId = station1.Id,
                EndingTrainStation = station2,
                EndingTrainStationId = station2.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station2,
                StartingTrainStationId = station2.Id,
                EndingTrainStation = station3,
                EndingTrainStationId = station3.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station3,
                StartingTrainStationId = station3.Id,
                EndingTrainStation = station4,
                EndingTrainStationId = station4.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station4,
                StartingTrainStationId = station4.Id,
                EndingTrainStation = station5,
                EndingTrainStationId = station5.Id,
            });


        await dataContext.SaveChangesAsync();

    }
    private static async Task AddTrain(DataContext dataContext)
    {
        var trains = dataContext.Set<Train>();
        var sections = dataContext.Set<Section>();


        var train1Sections = new List<Section>();
        train1Sections.Add(sections.First());

        var train2Sections = new List<Section>();
        if(sections.Find(2)  != null) {
           train2Sections.Add(sections.Find(2));
        }

        var train3Sections = new List<Section>();
        if (sections.Find(3) != null)
        {
            train3Sections.Add(sections.Find(3));
        }

        var train4Sections = new List<Section>();
        if (sections.Find(4) != null)
        {
            train4Sections.Add(sections.Find(4));
        }

        if (await trains.AnyAsync())
        {
            return;
        }

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F150",
                Sections = train1Sections
            });

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F420",
                Sections = train2Sections
            });

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F750",
                Sections = train3Sections
            });

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F950",
                Sections = train4Sections
            });

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddSection(DataContext dataContext)
    {
        var sections = dataContext.Set<Section>();
        var seats = dataContext.Set<Seat>();

        var ClassAseats = new List<Seat>();
        ClassAseats.Add(seats.First());

        var ClassBseats = new List<Seat>();
        if (seats.Find(2) != null)
        {
            ClassBseats.Add(seats.Find(2));
        }

        if (seats.Find(3) != null)
        {
            ClassBseats.Add(seats.Find(3));
        }

        var ClassCseats = new List<Seat>();
        if (seats.Find(4) != null)
        {
            ClassCseats.Add(seats.Find(4));
        }
        if (seats.Find(5) != null)
        {
            ClassCseats.Add(seats.Find(5));
        }

        var ClassDseats = new List<Seat>();
        if (seats.Find(6) != null)
        {
            ClassDseats.Add(seats.Find(6));
        }
        if (seats.Find(7) != null)
        {
            ClassDseats.Add(seats.Find(7));
        }
        if (seats.Find(8) != null)
        {
            ClassDseats.Add(seats.Find(8));
        }

        if (await sections.AnyAsync())
        {
            return;
        }


        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "A",
                Capacity = 168,
                Features = "Coach",
                SeatList = ClassAseats,
            });

        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "B",
                Capacity = 168,
                Features = "Coach,First Class",
                SeatList = ClassBseats,
       

            });

        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "C",
                Capacity = 168,
                Features = "Coach,First Class,Dining",
                SeatList = ClassCseats,
            
            });

        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "D",
                Capacity = 56,
                Features = "First Class,Dining,Sleeper,Roomlet",
                SeatList = ClassDseats,
          

            });

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddSeat(DataContext dataContext)
    {
        var seats = dataContext.Set<Seat>();

        if (await seats.AnyAsync())
        {
            return;
        }
        //class A
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 168,
                type = "coach"
            });
        //class B
        dataContext.Set<Seat>()
             .Add(new Seat
             {
                 Quantity = 84,
                 type = "coach"
             });

        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 42,
                type = "first class"
            });
        //class C
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 42,
                type = "coach"
            });

        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 62,
                type = "first class"
            });
        //class D
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 42,
                type = "coach"
            });

        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 10,
                type = "sleeper"
            });
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 4,
                type = "roomlet"
            });
        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainRoute(DataContext dataContext)
    {
        var trainRoutes = dataContext.Set<TrainRoute>();
        var trains = dataContext.Set<Train>();
        var paths = dataContext.Set<TrainPath>();

        if (await trainRoutes.AnyAsync())
        {
            return;
        }

        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = DateTime.Now,
                DeperatureTime = DateTime.Now.AddHours(3),
                Path = paths.First(),
                PathId = paths.First().Id,
                Train = trains.First(),
            });


        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainScheduledRoute(DataContext dataContext)
    {
        var trainScheduledRoutes = dataContext.Set<TrainScheduledRoutes>();
        var trainRoutes = dataContext.Set<TrainRoute>();

        if (await trainScheduledRoutes.AnyAsync())
        {
            return;
        }
        var groupofRoutes = new List<TrainRoute>();
        groupofRoutes.Add(trainRoutes.First());

        dataContext.Set<TrainScheduledRoutes>()
            .Add(new TrainScheduledRoutes
            {
                Routes = groupofRoutes,
            });

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTickets(DataContext dataContext)
    {
        var tickets = dataContext.Set<TrainRouteTicket>();
        var trainScheduledRoutes = dataContext.Set<TrainScheduledRoutes>();
        var seats = dataContext.Set<Seat>();
        var users = dataContext.Set<User>();

        if (await tickets.AnyAsync())
        {
            return;
        }

        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 12.50,
                Passager = users.First(),
                PassagerId = users.First().Id,
                ScheduledTrainRoute = trainScheduledRoutes.First(),
                SeatType = seats.First().type,
            });


        await dataContext.SaveChangesAsync();
    }
}