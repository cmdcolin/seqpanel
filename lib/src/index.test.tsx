import React from "react";

import { render } from "@testing-library/react";
import GenericSeqPanel from "./components/GenericSeqPanel";

test("expect protein rendering", async () => {
  const { findByText } = render(
    <GenericSeqPanel
      refseq="X"
      start={13201770}
      end={13216729}
      gene="WBGene00006749"
      transcript="R12H7.1a.2"
      mode="protein"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/MOD-jbrowses/WormBase/WS287/c_elegans_PRJNA13758/"
      urltemplate="tracks/Curated_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/wormbase-modencode/fasta/current/c_elegans.PRJNA13758.WS284.genomic.fa.gz"
    />,
  );
  await findByText(/R12H7.1a.2-protein/, {}, { timeout: 15000 });
}, 20000);
