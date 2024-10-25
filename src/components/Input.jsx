"use client";

const Input = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        const name = e.target.name.value ;
        const title = e.target.title.value;
        console.log(name , title)
    }
  return (
    <div>
      <h2>Post page or mongodb</h2>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Post now Data</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="book name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="book title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
