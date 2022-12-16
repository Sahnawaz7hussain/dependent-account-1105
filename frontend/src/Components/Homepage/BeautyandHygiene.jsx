import React from "react";

import { Grid, Image } from "semantic-ui-react";
import {Link} from 'react-router-dom'

export const BeautyandHygiene = () => (
  <div>
    <p style={{ textAlign: "center", fontSize: "20px" }}>Beauty and Hygiene</p>
    <div class="ui clearing divider"></div>
    <Link to="/products"><Grid verticalAlign="" columns={2} centered>
      <Grid.Row>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/40edc571-2e8d-496f-82fa-ddb25273c6b9/hpmakeup-mania-_beautyStorefront_m_251122_560x378_01.jpg" />
        </div>
        </Grid.Column>
        <br />
        <Grid verticalAlign="" columns={2}>
          <Grid.Column>
          <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/40edc571-2e8d-496f-82fa-ddb25273c6b9/hp_min-40-beautyStorefront_m_251122_275x184_02.jpg" />
            </div>
            <br />
            <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/40edc571-2e8d-496f-82fa-ddb25273c6b9/hp_under-199-beautyStorefront_m_251122_275x184_03.jpg" />
          </div>
          </Grid.Column>

          {/* <Grid verticalAlign="" columns={1}> */}
          <Grid.Column>
          <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/40edc571-2e8d-496f-82fa-ddb25273c6b9/hp_secent-sation-beautyStorefront_m_251122_275x184_04.jpg" />
           </div>
            <br />
            <div className="HoverEffect">
            <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/40edc571-2e8d-496f-82fa-ddb25273c6b9/hp_winter-lotions-beautyStorefront_m_251122_275x184_05.jpg" />
          </div>
          </Grid.Column>
        </Grid>
        {/* </Grid> */}
      </Grid.Row>

      <Grid verticalAlign="middle" columns={2} centered></Grid>
    </Grid>
    </Link>
  </div>
);