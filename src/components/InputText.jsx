export default function InputText({ title }) {
    return (
        <div className='flex flex-col justify-around w-4/5 h-16'>
            <label> {title} </label>
            <input required className='p-2 border border-dark rounded hover:border-secondary0Hover outline-secondary0Hover' type="text" />
        </div>
    )
}