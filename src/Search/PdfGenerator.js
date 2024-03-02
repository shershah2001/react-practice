import React  from 'react';
import './PdfGenerator.css'
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import 'jspdf-autotable';
const PdfGenerator = () => {
    // const tableRef = useRef(null);
    const pdfHandler = () => {
        const tableData = document.querySelector('.tableData');
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'in',
            format: 'letter'
        })
        doc.autoTable({ html: '.tableData' })
        doc.save("two-by-four.pdf")
    }
    const excelHandler = () => {
        let table_elt = document.getElementById("my-table-id");

        // Extract Data (create a workbook object from the table)
        let workbook = XLSX.utils.table_to_book(table_elt);
        
        // Process Data (add a new row)
        let ws = workbook.Sheets["Sheet1"];
        XLSX.utils.sheet_add_aoa(ws, [["Created "+new Date().toISOString()]], {origin:-1});
        
        // Package and Release Data (`writeFile` tries to write and save an XLSB file)
        XLSX.writeFile(workbook, "Report.xlsb");
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className='mt-3'>
                    <button className="btn btn-primary" onClick={pdfHandler}>PDF</button>
                    <button className="btn btn-danger" onClick={excelHandler}>EXCEL</button>
                    <table className='mt-3 tableData' id='my-table-id'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Section</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>mohit</td>
                                <td>5th</td>
                                <td>A</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>rohit</td>
                                <td>6th</td>
                                <td>B</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>sohit</td>
                                <td>7th</td>
                                <td>C</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>sandeep</td>
                                <td>8th</td>
                                <td>D</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PdfGenerator;
