import './pagination.scss'
const Pagination = ({ totalPages,paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <=totalPages; i++) {
      pageNumbers.push(i);
    }

      return (
                <div id="app" class="container">
                    <ul class="page">
                        { pageNumbers.map((number) => (
                                <li onClick={() => paginate(number)} class="page__numbers">{number}</li>
                        ))}
                    </ul>
                </div>
    );
};
export default Pagination;
