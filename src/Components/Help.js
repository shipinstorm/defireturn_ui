import { useEffect } from "react";
/*import {
  portfolio_data1,
  portfolio_data2,
  portfolio_table_data,
} from "../service/constants";*/
//import Layout from "./Layout";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import { useTranslation } from "react-i18next";

const Help = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    /*if (openMenu) {
        updateMenu();
    }
    allowMenu(false);*/
  }, [Help]);
  switch (i18n.language) {
    case 'en':
      return (
        <div className="main-board">

          <ChakraProvider >
            <ConnectButton handleOpenModal={() => { }} />
            <AccountModal isOpen={isOpen} onClose={onClose} />
          </ChakraProvider>

          <div className="sub-main-board m-top left-p">
            <p>
              <strong>DefiReturn</strong> calculates the{" "}
              <a
                className="text-yellow-main"
                href="https://www.investopedia.com/terms/c/costbasis.asp"
                target="blank"
              >
                cost basis
              </a>{" "}
              of your Defi positions. Simply plug in your wallet (or{" "}
              <a
                className="text-yellow-main"
                href="https://ui.defireturn.app/portfolio/0x7a16ff8270133f063aab6c9977183d9e72835428"
                target="blank"
              >
                someone else's
              </a>
              ). We will scan five blockchains, identify your positions, analyze
              your transaction history and show you how much money you've made. It
              takes 1-2 minutes depending on how many positions and transactions you
              have. <strong>DefiReturn</strong> is a read-only application. It will
              not ask you to sign any transactions, so there is zero-risk to use it.
            </p>
            <p className="mt12">
              <strong>DefiReturn</strong> is beta software. Not all numbers are
              accurate. We would love your feedback, positive or negative. You can
              email us at{" "}
              <a
                className="text-yellow-main"
                href="mailto:info@defireturn.app"
                target="blank"
              >
                info@defireturn.app
              </a>{" "}
              or{" "}
              <a
                className="text-yellow-main"
                href="https://discord.gg/SMCg9qVCN3"
                target="blank"
              >
                join our Discord channel
              </a>{" "}
              to meet other users.
            </p>
            <p className="mt12">
              <strong>DefiReturn</strong> is free to use. If you find it helpful,
              please <strong>support the project</strong> and help us improve it.
              Our wallet address is{" "}
              <a
                className="text-yellow-main"
                href="https://etherscan.io/address/0xcA9500cAB8E58C5e0006b3aC3F8a0289155300d0"
                target="blank"
              >
                0xcA9500cAB8E58C5e0006b3aC3F8a0289155300d0
              </a>
              . We accept donations on Ethereum, Polygon and Avalanche. Thank you!
            </p>
          </div>
          <hr className="feedback-hr"></hr>
          <div className="sub-main-board left-p">
            <p className="mt10">
              Here are some limitations for our initial release:
            </p>
            <ul class="customIndent">
              <li>
                DefiReturn connects to one wallet at a time. We intend to add
                support for multiple wallets in the future.
              </li>
              <li>
                DefiReturn supports five chains: Ethereum, Binance Smart Chain,
                Polygon, Avalanche, Fantom. We intend to support others, including
                non-EVM chains, in the future.
              </li>
              <li>
                DefiReturn only analyzes the most recent 2,000 token transfers per
                chain. Note that a single transaction may contain more than one
                token transfer. For example, a Uniswap-style LP deposit transaction
                will typically involve three token transfers: Two tokens are
                deposited and one LP token is received. Older positions that were
                opened more than 2,000 token transfers ago will not show the
                accurate cost basis. We intend to remove this limitation in the
                future in the premium product.
              </li>
              <li>
                DefiReturn does not yet calculate cost for liquid tokens. Instead,
                cost for liquid tokens is presented to be the same as value. If the
                value is not known, both cost and value are presented as $0.
              </li>
            </ul>
          </div>
        </div>
      );
    case 'es':
      return (
        <div className="main-board">

          <ChakraProvider >
            <ConnectButton handleOpenModal={() => { }} />
            <AccountModal isOpen={isOpen} onClose={onClose} />
          </ChakraProvider>

          <div className="sub-main-board m-top left-p">
            <p>
              <strong>DefiReturn</strong>  calcula el costo base de tus inversiones DeFi.
               Simplemente introduce la dirección de Wallet (o la de alguien más). 
               Haremos un escaneo de las cinco Blockchains que son compatibles, 
               identificaremos tus inversiones, analizaremos el histórico de tus transacciones 
               y mostraremos tus ganancias y pérdidas por cada posición. Este ánalisis tomará de 
               uno a dos minutos dependiendo de cuantas posiciones tengas y cuantas transacciones 
               hayas realizado.  <strong>DefiReturn</strong> es una aplicación de solo lectura. 
               No existe riesgo alguno, ya que no te pedirá autorizar ninguna transacción.
            </p>
            <p className="mt12">
              <strong>DefiReturn</strong>  se encuentra en modo Beta. Es posible que haya algunos errores 
              en la exactitud de los números. Agradecemos cualquier retroalimentación, tanto positiva como negativa.
               Puedes enviar un correo a{" "}
              <a
                className="text-yellow-main"
                href="mailto:info@defireturn.app"
                target="blank"
              >
                info@defireturn.app
              </a>{" "}
              con tu retroalimentación o{" "}
              <a
                className="text-yellow-main"
                href="https://discord.gg/SMCg9qVCN3"
                target="blank"
              >
                unirte a nuestro servidor de Discord
              </a>{" "}
              para formar parte de nuestra comunidad.
            </p>
            <p className="mt12">
              <strong>DefiReturn</strong> es una app gratuita. Si la encuentras útil, puedes apoyar nuestro proyecto
               y ayudarnos a mejorar. Nuestra dirección para transferencias es{" "}
              <a
                className="text-yellow-main"
                href="https://etherscan.io/address/0xcA9500cAB8E58C5e0006b3aC3F8a0289155300d0"
                target="blank"
              >
                0xcA9500cAB8E58C5e0006b3aC3F8a0289155300d0
              </a>
              . Aceptamos transferencias en Ethereum, Polygon y Avalanche. ¡Muchas gracias!
            </p>
          </div>
          <hr className="feedback-hr"></hr>
          <div className="sub-main-board left-p">
            <p className="mt10">
            Existen algunas limitantes en esta versión inicial:
            </p>
            <ul class="customIndent">
              <li>
              DefiReturn puede conectarse solo a una wallet a la vez. Está en nuestro roadmap implementar
               el soporte de múltiples wallets a la vez.
              </li>
              <li>
              DefiReturn es compatible con cinco blockchains: Ethereum, Binance Smart Chain,
               Polygon, Avalanche, Fantom. Está en nuestro roadmap implementar la compatibilidad
                con otras blockchains que no sean EVM.

              </li>
              <li>
              DefiReturn solo analiza las últimas 2,000 transacciones por cada blockchain. Cabe mencionar que una sola transacción puede contener más de una transferencia de tokens. Por ejemplo, un depósito realizado a un Pozo de liquidez (Liquidity Pool) en Uniswap tipicamente incluye tres transferencias de tokens: Dos tokens son depositados y un token de liquidez es recibido. Las posiciones antiguas que fueron hechas hace más de 2,000 transacciones no mostrarán el costo base correcto.
               Esta limitante será removida en el futuro en nuestra versión premium.
              </li>
              <li>
              DefiReturn todavía no calcula el costo base de los tokens líquidos en tu wallet. 
              Estos tokens serán mostrados con su valor presente, es decir, el mismo que en
               la columna de “Valor Actual”. 
              Si este valor no es conocido, se mostrará con un valor de $0
              </li>
            </ul>
          </div>
        </div>
      );
    default:
      return (
        <div>

        </div>
      )
  }
};
export default Help;
