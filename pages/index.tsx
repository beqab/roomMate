import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const IndexPage = () => {
  let { t } = useTranslation("common");
  const router = useRouter();

  console.log(router.locales, "ttttttttt");
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <h2>{t("greeting")}</h2>
      <Link href={"/login"}>
        <a>login </a>
      </Link>
      <Link href={"/register"}>
        <a> register </a>
      </Link>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>

        <br />
        {router.locales.map((el) => {
          return (
            <Link key={el} href={router.asPath} locale={el}>
              <a>{el}</a>
            </Link>
          );
        })}
      </p>
    </Layout>
  );
};

export default IndexPage;
