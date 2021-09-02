import './pagination.scss'
const Pagination = ({ pageNumbers}) => {
      return (
                <div id="app" class="container">
                    <ul class="page">
                        { Array.apply(null, { length: 10 }).map((e,i) => (
                                <li class="page__numbers">{i}</li>
                        ))}
                    </ul>
                </div>
    );
};
{/* <li key={number} className='page-item'>
<a onClick={() => paginate(number)} href='!#' className='page-link'>
  {number}
</a>
</li> */}
export default Pagination;
