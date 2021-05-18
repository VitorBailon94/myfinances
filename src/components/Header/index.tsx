import logoImg from '../../assets/logoVitor.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="my finances" />
        <button type='button' onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>


      </Content>
    </Container>
  )
}