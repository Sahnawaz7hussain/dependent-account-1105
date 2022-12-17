import React from "react";

import { Grid, Image, Segment } from "semantic-ui-react";

import {Link} from 'react-router-dom'

export const BankOffers = () => (
    <div>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
      Bank Offers
      </p>
      <div class="ui clearing divider"></div>
      <Link to="/products">  <Grid doubling columns={4}>
        <Grid.Column>
        <div className="HoverEffect">
            <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/51aad6de-a6a3-4c76-a073-eeb0915e8f14/t1_hp_aff_m_bob_360_101222.jpg" />
          </Segment>
          </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
        <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/51aad6de-a6a3-4c76-a073-eeb0915e8f14/t1_hp_aff_m_onecard_360_101222.jpg" />
          </Segment>
          </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
        <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/51aad6de-a6a3-4c76-a073-eeb0915e8f14/t1_hp_aff_m_IndusInd_360_101222.jpg" />
          </Segment>
          </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
        <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/51aad6de-a6a3-4c76-a073-eeb0915e8f14/t1_hp_aff_m_dbs_360_101222.jpg" />
          </Segment>
          </div>
        </Grid.Column>
      </Grid>
      </Link>
    </div>
  );
  