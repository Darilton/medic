using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace dal;

public class MedicContext: IdentityDbContext<IdentityUser>
{
    public MedicContext(DbContextOptions<MedicContext> options): base(options){}
}
