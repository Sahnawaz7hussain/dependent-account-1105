import React from "react";

import { Grid, Image } from "semantic-ui-react";



export const CleaningHousehold = () => (
    <div>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Cleaning & Household
      </p>
      <div class="ui clearing divider"></div>
      <Grid doubling columns={4}>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/addfcfa5-1a5d-4a68-a027-17c115929b57/hp_cleaners-disfec_cleaningStorefront_m_480_251122_01.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/addfcfa5-1a5d-4a68-a027-17c115929b57/hp_detergebts-favric-cleaningStorefront_m_480_251122_02.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/addfcfa5-1a5d-4a68-a027-17c115929b57/hp_wipes-cleaningStorefront_m_480_251122_03.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/addfcfa5-1a5d-4a68-a027-17c115929b57/hp_fresheners-repellem-cleaningStorefront_m_480_251122_04.jpg" />
        </div>
        </Grid.Column>
      </Grid>
    </div>
  );
  