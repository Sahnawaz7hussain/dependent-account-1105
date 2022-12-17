import React from "react";

import { Grid, Image } from "semantic-ui-react";

import {Link} from 'react-router-dom'

export const YourDailyStaples = () => (
    <div>
      <p style={{ textAlign: "center", fontSize: "20px" }}>Your Daily Staples</p>
      <div class="ui clearing divider"></div>
      <Link to="/products">    <Grid doubling columns={6}>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_atta-flour-staplesStorefront_m_480_250922_01.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_rice-staplesStorefront_m_480_250922_02.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_dals-pulses-staplesStorefront_m_480_250922_03.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_cooking-oils-staplesStorefront_m_480_250922_04.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_dry-fruits-staplesStorefront_m_480_250922_05.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/a984b1c0-6135-481d-b191-dd8c278e1acb/hp_salt-staplesStorefront_m_480_250922_06.jpg" />
        </div>
        </Grid.Column>
      </Grid>
      </Link>
    </div>
  );