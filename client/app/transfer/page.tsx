"use client";
import Text from "../components/Text";
import GradientButton from "@/app/components/GradientButton";
import Link from "next/link";
import CreditCard from "../components/CreditCard";
import CreditCardInfo from "../components/CreditCardInfo";
import { useTransferContext } from "@/app/context/transfer/context";
import SEOHead from "@/app/components/SEOHead";
import { useUserContext } from "../context/user/context";

function TransferPage() {
  const { data } = useUserContext();
  const { transferDetails, setTransferDetails } = useTransferContext();
  return (
    <>
      <head>
        <SEOHead title="O'tkazmalar" />
      </head>
      <div className="p-4">
        <Text size="text-md">Pul o'tkazish</Text>
        <div>
          <h4 className="m-3 dark:text-white text-gray-900">Kartani tanlash</h4>
          <div className="sm:flex flex-wrap w-full sm:justify-start justify-center">
            {data?.result?.cards.length ? (
              data?.result.cards.map((card) => (
                <CreditCard
                  selected={card._id === transferDetails?.senderCard}
                  onClick={() =>
                    setTransferDetails((prev) => ({
                      ...prev,
                      senderCard: card._id,
                    }))
                  }
                  key={card._id}
                  flexible
                >
                  <CreditCardInfo card={card} />
                </CreditCard>
              ))
            ) : (
              <Link href="/">
                <CreditCard flexible>
                  <CreditCardInfo />
                </CreditCard>
              </Link>
            )}
          </div>
          <div className="flex justify-end my-3">
            <Link
              href={data?.result?.cards.length === 0 ? "" : "/transfer/user"}
            >
              <GradientButton>Keyingisi</GradientButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransferPage;
