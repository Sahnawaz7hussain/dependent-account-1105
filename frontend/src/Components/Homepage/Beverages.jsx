import React from "react";
import {Link} from 'react-router-dom'
import { Grid, Image } from "semantic-ui-react";

export const Beverages = () => (
    <div>
      <p style={{ textAlign: "center", fontSize: "20px" }}>Beverages</p>
      <div class="ui clearing divider"></div>
      <Link to="/products">    <Grid verticalAlign="" columns={2} centered>
        <Grid.Row>
          <Grid.Column>
          <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/bcbbc1f8-d9db-4cb1-bfd9-fc4b004e2f97/hp_energy-drinks-beveragesStorefront_m_251122_560x378_01.jpg" />
          </div>
          </Grid.Column>
          <br />
          <Grid verticalAlign="" columns={2}>
            <Grid.Column>
            <div className="HoverEffect">
              <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/bcbbc1f8-d9db-4cb1-bfd9-fc4b004e2f97/hp-hot-sips-_beveragesStorefront_m_251122_275x184_02.jpg" />
              </div>
              <br />
              <div className="HoverEffect">
              <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/bcbbc1f8-d9db-4cb1-bfd9-fc4b004e2f97/hp_health-drinks-beveragesStorefront_m_251122_275x184_03.jpg" />
            </div>
            </Grid.Column>
            <Grid.Column>
            <div className="HoverEffect">
              <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/bcbbc1f8-d9db-4cb1-bfd9-fc4b004e2f97/hp_boost-mrtabolism-beveragesStorefront_m_251122_275x184_04.jpg" />
              </div>
              <br />
              <div className="HoverEffect">
              <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/bcbbc1f8-d9db-4cb1-bfd9-fc4b004e2f97/hp_soft-drinks-beveragesStorefront_m_251122_275x184_05.jpg" />
            </div>
            </Grid.Column>
          </Grid>
        </Grid.Row>
  
        <Grid verticalAlign="middle" columns={2} centered></Grid>
      </Grid>
      </Link>
    </div>
  );
  