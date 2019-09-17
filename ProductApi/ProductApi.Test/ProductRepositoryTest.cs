using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProductApi.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductApi.Test
{
    [TestClass]
    public class ProductRepositoryTest
    {
        ProductRepository repo;

        [TestInitialize]
        public void TestSetUp()
        {
            ProductInitializeDb db = new ProductInitializeDb();
            System.Data.Entity.Database.SetInitializer(db);
            repo = new ProductRepository();

        }

        [TestMethod]
        public void ShouldProductRepoInitializedWithTwoRecordsInBeginning()
        {
            var result = repo.GetProducts();
            Assert.IsNotNull(result);
            var nr = result.ToList().Count;
            Assert.AreEqual(2, nr);


        }


    }
}
