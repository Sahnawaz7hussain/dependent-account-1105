import React from "react";

import { Grid, Image, Segment } from "semantic-ui-react";


export const TopOffers = () => (
    <div>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
      Top Offers
      </p>
      <div class="ui clearing divider"></div>
      <Grid doubling columns={4}>
        <Grid.Column>
            <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/f072d5a6-ad19-470c-a27b-6c14e3372009/hp_dow-topoffersStorefront_m_480_251122_01.jpg" />
          </Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/f072d5a6-ad19-470c-a27b-6c14e3372009/hp_big-packs-topoffersStorefront_m_480_251122_02.jpg" />
          </Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/f072d5a6-ad19-470c-a27b-6c14e3372009/hp_combos-topoffersStorefront_m_480_251122_03.jpg" />
          </Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment>
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/f072d5a6-ad19-470c-a27b-6c14e3372009/hp_30-corner-topoffersStorefront_m_480_251122_04.jpg" />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
  