using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore;

namespace dal;

public class MedicContext: DbContext
{
    public MedicContext(DbContextOptions<MedicContext> options): base(options){}
}
