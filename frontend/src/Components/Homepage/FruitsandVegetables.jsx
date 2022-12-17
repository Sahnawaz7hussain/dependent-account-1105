
import React from "react";
import "./Fruits.css"
import { Grid, Image } from "semantic-ui-react";
import {Link} from 'react-router-dom'

export const FruitsandVegetables = () => (
    <div>
  
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Fruits and Vegetables
      </p>
      <div class="ui clearing divider"></div>
      <Link to="/products">    <Grid doubling columns={6}>
        <Grid.Column>
          <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_organic-fnc-fnv_Storefront_m_251122_01.jpg" />
              </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_fresh-fruits-fnv_Storefront_m_251122_02.jpg" />
          </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_fresh-vegetables-fnv_Storefront_m_251122_03.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_cuts-sprouts-fnv_Storefront_m_251122_04.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_exotic-fruits-fnv_Storefront_m_251122_05.jpg" />
        </div>
        </Grid.Column>
        <Grid.Column>
        <div className="HoverEffect">
          <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/79e284b5-4eb8-4e08-b32f-de87a6dcb369/e5ea2843-187e-41ca-a9ab-17c20bc8d463/hp_herbs-seasonings-fnv_Storefront_m_251122_06.jpg" />
        </div>
        </Grid.Column>
      </Grid>
      </Link>
    </div>
  );
  