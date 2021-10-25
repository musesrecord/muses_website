// Imports
import React from 'react';
import Layout from "@components/Layout"; // Layout wrapper
import Link from "next/link"; // Local routing
import styles from "@styles/pages/Home.module.scss"; // Styles


// Types
import type { ReactElement } from "react";

export default function Jam(): ReactElement {

    // Quicklinks to render
    const quicklinks: Record<string, string>[] = [
      { name: "mu::ses", url: "/" },
      {
        name: "ra::dio",
        url: "/radio",
      },
      {
        name: "fes::tival",
        url: "/festival",
      },
    ];

  return (
    <Layout>
      <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>j::am</h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  {url.startsWith("/") ? (
                    // If link to local page use Link
                    <Link href={url}>
                      <a>{name}</a>
                    </Link>
                  ) : (
                    // Else, redirect in new tab
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>
            J::am will be launched in due course... 
            For now, be inspired and creative ✨ <br />
            We recommend that you hold your Mu::ses NFT, you may need it in the future 🤫
          </p>
        </div>
    </Layout>
  );
}
