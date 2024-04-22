import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
 const coffee = useLoaderData();
  const { _id, details, name, photo, quantity, supplier, taste, category } =
  coffee;
 
   const handleUpdateCoffee = e => {
     e.preventDefault();
     const form = e.target;
     const name = form.name.value;
     const quantity = form.quantity.value;
     const supplier = form.supplier.value;
     const taste = form.taste.value;
     const details = form.details.value;
     const category = form.category.value;
     const photo = form.photo.value;

    const UpdatedCoffee = {
     _id,
       name,
       quantity,
       supplier,
       taste,
       category,
       details,
       photo,
     };
console.log(_id);
     console.log(UpdatedCoffee);

     fetch(`http://localhost:5000/coffee/${_id}`, {
       method: 'PUT',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(UpdatedCoffee),
     })
       .then(res => res.json())
       .then(data => {
         console.log(data);
         if (data.modifiedCount > 0) {
           Swal.fire({
             title: 'success',
             text: 'Coffee Updated Successfully',
             icon: 'success',
             confirmButtonText: 'Cool',
           });
         }
       });
   };
 return (
   <div className="bg-[#f4f3f0] p-24">
   <h2 className="text-4xl font-extrabold">Update Coffee : {name}</h2>

     <form onSubmit={handleUpdateCoffee}>
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
        defaultValue={name}
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
        defaultValue={quantity}
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
        defaultValue={supplier}
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
        defaultValue={taste}
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
        defaultValue={category}
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
        defaultValue={details}
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
        defaultValue={photo}
               placeholder="Photo URL"
               className="input input-bordered w-full"
             />
           </label>
         </div>
       </div>
       <input
         type="submit"
         value="Update Coffee"
         className="btn btn-block bg-black text-white"
       />
     </form>
   </div>
 );
};

export default UpdateCoffee;