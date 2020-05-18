import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt, Img, Table, Cell } from 'pdfmake-wrapper';
import { LocalStorageService } from 'app/providers/localStorage/local-storage.service';


@Component({
  selector: 'app-pdf-generate',
  templateUrl: './pdf-generate.component.html',
  styleUrls: ['./pdf-generate.component.css']
})
export class PdfGenerateComponent implements OnInit {
  
  name: string
  lastName: string
  document: number

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(){
    let user = this.localStorage.getUserInfo();
    this.name = user.name;
    this.lastName = user.lastName;
    this.document = user.document;
  }

  async generatePdf() {
    const pdf = new PdfMakeWrapper();
    pdf.pageMargins([ 60, 60, 40, 60 ]);
    pdf.pageOrientation('landscape');

    pdf.add(
      new Table([
      [
        new Txt('').bold().end,
        new Cell( await new Img('../../../assets/img/1200px-Coat_of_arms_of_Colombia.png', false).fit([140, 250]).build()).colSpan(2).alignment('center').end,
        new Txt('').bold().end,
        new Txt('').bold().end
      ],
      [
        new Cell( new Txt(`REPUBLICA DE COLOMBIA
        `).fontSize(10).end ).colSpan(4).alignment('center').end
      ],
      [
        new Cell( new Txt(`Plataforma Virtual VCUR`).bold().fontSize(32).end ).colSpan(4).alignment('center').end
      ],
      [
        new Cell( new Txt(`En cumplimiento de la ley 119 de 1994 y en atención a que`).italics().fontSize(12).end ).colSpan(4).alignment('center').end
      ],
      [
        new Cell( new Txt(`${this.name.toUpperCase()} ${this.lastName.toUpperCase()}`).bold().fontSize(36).end ).colSpan(4).alignment('center').end
      ],
      [
        new Cell( new Txt(`Con Cedula de Ciudadania N° ${new Intl.NumberFormat().format(this.document)}
        `).italics().fontSize(12).end ).colSpan(4).alignment('center').end
      ],
      [
        new Cell( new Txt(`Cursó y aprobó el programa de Formación Virtual Integral
                          y cumplió con las condiciones requeridas por la entidas, le confiere el
        `).italics().fontSize(12).end ).colSpan(4).alignment('center').end
      ],
      [
        new Cell( new Txt(`Título de
        `).italics().fontSize(18).end ).bold().colSpan(4).alignment('center').end
      ],
      [
        new Cell( new Txt(`FORMACIÓN VIRTUAL EN`).fontSize(20).end ).bold().colSpan(4).alignment('center').end
      ],
      [
        new Cell( new Txt(`GERENCIA DE PROYECTOS Y CONOCIMIENTO EN PMBOK`).fontSize(26).end ).bold().colSpan(4).alignment('center').end
      ],
      [
        new Cell( new Txt(`En testimonio de lo anterior, se firma el presente Título en Bogotá
                          a los dieciocho (18) días del mes de mayo de dos mil veinte (2020)
        `).italics().fontSize(12).end ).colSpan(4).alignment('center').end
      ]       
  ]).widths([ 180, 180, 180, 180 ]).layout('noBorders').end)

    pdf.watermark(new Txt('VCUR VIRTUAL').color('cyan').opacity(0.2).end)
    pdf.create().open();
  }
}
