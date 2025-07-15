import { useNavigate } from 'react-router-dom';
import cloxeerLogo from '/src/assets/images/logo/cloxeer.png';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md w-full text-center">
        {/* Logo - tamanho reduzido */}
        <div className="flex justify-center mb-4">
          <img 
            src={cloxeerLogo} 
            alt="Cloxeer Logo" 
            className="w-24 h-24 object-contain" 
          />
        </div>

        {/* Título e descrição - tamanhos reduzidos */}
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Saiba o que está acontecendo agora no mundo.
        </h1>
        <p className="text-gray-600 mb-6 text-sm">
          Conecte-se, compartilhe e descubra com o Cloxeer.
        </p>

        {/* Botões - tamanhos reduzidos */}
        <button 
          onClick={() => navigate('/register')}
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg font-medium text-base shadow-md hover:bg-indigo-700 transition duration-300 mb-3"
        >
          Começar
        </button>

        <button 
          onClick={() => navigate('/login')}
          className="w-full py-2 px-4 bg-white text-indigo-600 border border-indigo-600 rounded-lg font-medium text-base shadow-md hover:bg-indigo-50 transition duration-300 mb-3"
        >
          Entrar
        </button>

        {/* Textos menores */}
        <button 
          onClick={() => navigate('/app')}
          className="text-indigo-600 text-sm font-medium hover:underline"
        >
          Ignorar e ir para o app
        </button>

        <p className="mt-4 text-gray-600 text-xs">
          Você já tem uma conta?{' '}
          <button 
            onClick={() => navigate('/login')}
            className="text-indigo-600 font-medium hover:underline"
          >
            Entre
          </button>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
