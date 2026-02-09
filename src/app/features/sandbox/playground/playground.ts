import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input';
import { ButtonComponent } from '../../../shared/components/button/button';
import { TextareaComponent } from '../../../shared/components/textarea/textarea';
import { HeaderComponent } from '../../../shared/components/header/header';
import { ViewPostCardComponent } from '../../../shared/components/view-post-card/view-post-card';
import { ModalComponent } from '../../../shared/components/modal/modal';
import { PostCreateCardComponent } from '../../../shared/components/post-create-card/post-create-card';
@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    ViewPostCardComponent,
    HeaderComponent,
    ReactiveFormsModule,
    ModalComponent,
    PostCreateCardComponent,
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss',
})
export class PlaygroundComponent {
  currentUser = 'Victor'; // Simula o usuário logado

  // 1. Seu teste de estados anterior
  testForm = new FormGroup({
    textControl: new FormControl(''),
    emailControl: new FormControl(''),
    errorControl: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  // 2. Novo teste: Botão dependente do Input
  sendForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor() {
    // Mantém o estado de erro visível no primeiro teste
    this.testForm.controls.errorControl.markAsTouched();
  }

  handleSubmission() {
    if (this.sendForm.valid) {
      alert(`Enviado com sucesso: ${this.sendForm.value.userName}`);
    }
  }

  // Adicione essa função:
  console(msg: string) {
    console.log('🔘 Evento disparado:', msg);
    alert(msg); // Opcional: coloquei um alert pra você ver na tela se preferir
  }

  handlePostCreation(data: { title: string; content: string }) {
    console.log('Evento recebido do PostCreateCard:', data);
    alert(`Post criado com sucesso: ${data.title}`);
  }

  /**
   * Captura o clique no ícone de editar do ViewPostCard
   */
  handleEdit(): void {
    console.log('📝 Edit action detected in Playground!');
    // Por enquanto, apenas um alerta para confirmar que o Output está funcionando
    alert('Edit modal will open here.');
  }

  /**
   * Captura o clique no ícone de deletar do ViewPostCard
   */
  handleDelete(): void {
    console.log('🗑️ Delete action detected in Playground!');
    // Confirm simples para testar a interação
    const confirmDelete = confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      console.log('User confirmed deletion.');
    }
  }

  //MODAL!!!!!!!!!!!!!!!!!!!
  // 1. Estado para controlar se o modal de deleção está visível
  isDeleteModalOpen = signal(false);

  // 2. Método que será chamado pelo ícone de lixeira no ViewPostCard
  openDeleteModal(): void {
    console.log('🗑️ Opening delete confirmation...');
    this.isDeleteModalOpen.set(true);
  }

  // 3. Método para fechar o modal (Cancel)
  closeDeleteModal(): void {
    this.isDeleteModalOpen.set(false);
  }

  // 4. Método para confirmar a deleção
  confirmDeletion(): void {
    console.log('✅ Item deleted successfully!');
    // Aqui no futuro chamaremos o Service
    this.isDeleteModalOpen.set(false);
    alert('Item deleted!');
  }

  // --- NOVA LÓGICA: TESTE DO EDIT MODAL ---

  // 1. Sinal para controlar o Modal de Edição
  isEditModalOpen = signal(false);

  // 2. Função que simula salvar a edição
  handleSaveEdit(data: { title: string; content: string }) {
    console.log('💾 Dados salvos no Playground:', data);
    alert(`EDITADO COM SUCESSO!\n\nNovo Título: ${data.title}\nConteúdo: ${data.content}`);
    this.isEditModalOpen.set(false); // Fecha o modal
  }

  // 3. Função para abrir o modal de teste
  openEditModalTest() {
    this.isEditModalOpen.set(true);
  }
}
