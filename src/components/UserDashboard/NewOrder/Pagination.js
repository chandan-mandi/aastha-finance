
import React from 'react';

const Pagination = () => {
    return (
        <div className="mt-5">
        <nav aria-label="Page navigation example mt-4">
            <ul class="pagination pagination-circle pg-blue justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link" aria-label="Previous">
                    <i class="fa-solid fa-angle-left"></i>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item active"><a class="page-link waves-effect">1</a></li>
                <li class="page-item"><a class="page-link waves-effect">2</a></li>
                <li class="page-item">
                    <a class="page-link" aria-label="Next">
                        <i class="fa-solid fa-angle-right"></i>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default Pagination;