import Swal from 'sweetalert2';
const AddCoffee = () => {
  const handleAddCoffee = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffee);

    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then(res => res.json())
      .then(data => {
       console.log(data);
       if (data.insertedId) {
        Swal.fire({
         title: 'success',
         text: 'User Update Successfully',
         icon: 'success',
         confirmButtonText: 'Cool',
        })
       }
      });
  };

  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-4xl font-extrabold">Add Coffee</h2>

      <form onSubmit={handleAddCoffee}>
        {/* form row */}
        <div className="flex gap-12">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="flex gap-12">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        {/* form category & details row */}
        <div className="flex gap-12">
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="from-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>

        {/* form category & details row */}
        <div>
          <div className="from-control md:w-3/4 lg:w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block bg-black text-white"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
