import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { ProdutosComponent } from '../produtos/produtos.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public carrinhoService: CarrinhoService
  ){}
}
