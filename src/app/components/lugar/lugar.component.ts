import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../classes/categoria/categoria';
import { CategoriaService } from '../../services/categorias/categoria.service';
import { LugarService } from '../../services/lugares/lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})

export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private lugarService: LugarService
  ) {
     this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.categoriaService.obterTodos().subscribe({
      next: (listaCategorias) => this.categorias = listaCategorias,
      error: (erro) => console.log('Erro ao obter categorias', erro)
    });
  }

  salvar() {
    if(this.camposForm.valid) {
      this.lugarService.salvar(this.camposForm.value).subscribe({
        next: (lugar) => {
          console.log('Lugar salvo com sucesso', lugar);
          this.camposForm.reset();
        },
  
        error: (erro) => console.log('Erro ao salvar lugar', erro)
      });
    }
  }

  isCampoInvalido(nomeCampo: string) : boolean {
    const campo = this.camposForm.get(nomeCampo);
    return (campo?.invalid && campo?.touched) && campo?.errors?.['required'];
  }
}
