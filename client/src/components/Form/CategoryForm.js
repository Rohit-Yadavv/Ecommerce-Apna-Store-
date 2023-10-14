import React from 'react'

const CategoryForm = ({ handleSubmit, value, setValue }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d-flex mb-3">
                    <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="form-control" placeholder='Enter Category ' />
                    <button type="submit" className="btn btn-outline-primary ms-3">Submit</button>
                </div>
            </form>
        </>
    )
}

export default CategoryForm